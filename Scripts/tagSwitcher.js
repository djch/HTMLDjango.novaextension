// Adapted from https://github.com/nova-ruby/rails
exports.djangoTagSwitcher = async function(editor) {
  const brackets = [
    ["{{ ", " }}"],
    ["{% ", " %}"],
    ["{# ", " #}"],
  ];

  let ranges = editor.selectedRanges;
  const newSelection = [];

  await editor.edit(function (e) {
    for (let range of ranges) {
      const lineRange = editor.getLineRangeForRange(range);
      const lineText = editor.getTextInRange(lineRange);

      let newLineText = lineText;
      let tagFound = false;

      for (let i = 0; i < brackets.length; i++) {
        const openTag = brackets[i][0].trim();
        const closeTag = brackets[i][1].trim();

        if (lineText.includes(openTag) && lineText.includes(closeTag)) {
          const newOpenTag = brackets[(i+1) % brackets.length][0].trim();
          const newCloseTag = brackets[(i+1) % brackets.length][1].trim();

          newLineText = newLineText
            .replace(new RegExp(openTag, 'g'), newOpenTag)
            .replace(new RegExp(closeTag, 'g'), newCloseTag);

          tagFound = true;
          break;
        }
      }

      if (!tagFound) {
        // If no tag was found, wrap the selected text (or insert empty tags if there's no selection)
        const newText = range.empty ? brackets[0].join('') : brackets[0][0] + editor.getTextInRange(range) + brackets[0][1];
        e.replace(range, newText);
        const cursorPos = range.start + brackets[0][0].length;
        range = new Range(cursorPos, cursorPos);
      } else {
        // Replace the whole line
        e.replace(lineRange, newLineText);
        // Here you might want to add logic to calculate the new cursor position
      }

      newSelection.push(range);
    }
  });

  editor.selectedRanges = newSelection;
}

