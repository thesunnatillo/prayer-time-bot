const {InlineKeyboard} = require("grammy");
module.exports = new InlineKeyboard()
    .text('Toshkent', 'toshkent').text('Andijon', 'andijon').row()
    .text('BUXORO', 'buxoro').text('Navoiy', 'navoiy').row()
    .text('Surxandaryo', 'termiz').text('Qashqadaryo', 'qarshi').row()
    .text('Namangan', 'namangan').text("Farg'ona", "farg'ona").row()
    .text('Xorazm', 'xiva').text("Qoraqalpog'izton", 'nukus').row()
    .text('Jizzax', 'jizzax').text('Sirdaryo', 'guliston')