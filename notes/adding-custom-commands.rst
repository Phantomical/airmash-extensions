
Adding Custom Commands
======================

To add a custom command in-game command, override
UI.parseCommand with your own function that recognizes
your custom command. 

Example:

.. code-block:: javascript
	
		const oldCommand = UI.parseCommand;
		UI.parseCommand = function (cmd) {
			if (cmd.toLowerCase() === '/test') {
				UI.addChatMessage('Test command succeeded!');
				return true;
			}
			else {
				return oldCommand(cmd);
			}
		}
		
Notes:
	- You must return true if you want the command to be recognized
	- Not forwarding to the old function will disable all other commands