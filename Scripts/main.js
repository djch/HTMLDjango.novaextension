const { djangoTagSwitcher } = require("./tagSwitcher");

nova.commands.register("djangoTagSwitcher", async (editor) => {
  djangoTagSwitcher(editor);
});
