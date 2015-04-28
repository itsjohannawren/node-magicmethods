// Adapted from https://gist.github.com/gavinengel/8572856
var path = require ('path');

// Placeholder in case someone tries to assign the return value of require()
module.exports = {};

// Main stack definition
Object.defineProperty (global, '__STACK__', {
	'get': function () {
		// Save the original prepareStackTrace() method
		var orig = Error.prepareStackTrace;
		// Override the method
		Error.prepareStackTrace = function (_, stack) {
			return (stack);
		};
		// Create a new error object
		var err = new Error ();
		// Trigger a stacktrace within the error
		Error.captureStackTrace (err, arguments.callee);
		// Save the stacktrace
		var stack = err.stack;
		// Restore the original prepareStackTrace() method
		Error.prepareStackTrace = orig;
		// Shift the stack so the first element is the user code that made us be run
		stack.shift ();
		// Return the stack
		return (stack);
	}
});

// General information about where we are
Object.defineProperty (global, '__INFO__', {
	'get': function () {
		var stack = __STACK__, stackClass, stackFunction, stackLine, stackFile, index;

		// Check the first two stack levels
		for (index in [0, 1]) {
			// Do we have receiver that has a constructor?
			if (stack [index] && stack [index].receiver && stack [index].receiver.constructor) {
				// Is the constructor something other than Object or Module?
				if (
					(stack [index].receiver.constructor.name !== 'Object') &&
					(stack [index].receiver.constructor.name !== 'Module')
				) {
					// Jackpot
					stackClass = stack [index].receiver.constructor.name;
					break;
				}
			}
		}

		// Start with a basic function name
		stackFunction = stack [0].fun.name;
		// No? Try digging deeper
		if ((stackFunction === null) || (stackFunction === undefined)) {
			// Use the receiver information
			stackFunction = null;
			// Loop through all of the receivers
			for (var key in stack [0].receiver) {
				// Look for the first one with caller information
				if (stack [0].receiver [key].caller) {
					// Tada!
					stackFunction = key;
				}
			}
		}
		// Still no? Maybe it's an anonymous function
		if (stackFunction === '') {
			// It's either in a function we can name or it's anonymous
			stackFunction = '(anonymous)';
		}
		// FIXME: Find a way to detect whether or not we're actually in an anonymous function or just in the initial code space

		// Store the line number
		stackLine = stack [0].getLineNumber ();
		// Store the file
		stackFile = stack [0].getFileName ();

		// Return the information line
		return (stackFile + ':' + stackLine + ' ' + (stackClass ? stackClass + '.' : '') + stackFunction);
	}
});

// The class we're currently in
Object.defineProperty (global, '__CLASS__', {
	'get': function () {
		var stack = __STACK__, index;

		// Check the first two stack levels
		for (index in [0, 1]) {
			// Do we have receiver that has a constructor?
			if (stack [index] && stack [index].receiver && stack [index].receiver.constructor) {
				// Is the constructor something other than Object or Module?
				if (
					(stack [index].receiver.constructor.name !== 'Object') &&
					(stack [index].receiver.constructor.name !== 'Module')
				) {
					// Jackpot
					return (stack [index].receiver.constructor.name);
				}
			}
		}

		// There is no class information in traces...
		return (null);
	}
});

// The current function we're in or "immediate"
Object.defineProperty (global, '__FUNCTION__', {
	'get': function () {
		var method = null, stack = __STACK__;

		// Start with a basic function name
		method = stack [0].fun.name;
		// No? Try digging deeper
		if ((method === null) || (method === undefined)) {
			// Use the receiver information
			method = null;
			// Loop through all of the receivers
			for (var key in stack [0].receiver) {
				// Look for the first one with caller information
				if (stack [0].receiver [key].caller) {
					// Tada!
					method = key;
				}
			}
		}
		// Still no? Maybe it's an anonymous function
		if (method === '') {
			// It's either in a function we can name or it's anonymous
			method = '(anonymous)';
		}
		// FIXME: Find a way to detect whether or not we're actually in an anonymous function or just in the initial code space

		// It's magic
		return (method);
	}
});

// The line we're on
Object.defineProperty (global, '__LINE__', {
	'get': function () {
		// Line is directly available
		return (__STACK__ [0].getLineNumber ());
	}
});

// The file we're in
Object.defineProperty (global, '__PATH__', {
	'get': function () {
		// Full file path is directly available
		return (__STACK__ [0].getFileName ());
	}
});

// The name of the file we're in
Object.defineProperty (global, '__FILE__', {
	'get': function () {
		// Full file path passed through basename()
		return (path.basename (__STACK__ [0].getFileName ()));
	}
});

// The extension of the file we're in
Object.defineProperty (global, '__EXT__', {
	'get': function () {
		// Full file path passed through extname() to retrieve the extension
		return (path.extname (__STACK__ [0].getFileName ()));
	}
});

// The directory that contains the file we're in
Object.defineProperty (global, '__DIR__', {
	'get': function () {
		// Full file path passed through dirname ()
		return (path.dirname (__STACK__ [0].getFileName ()));
	}
});
