const {Schema, model} = require('mongoose');
const Doctor = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    specialistic: {type: String, required: true},
    work_experience: {type: String, required: true},
    work_graphics: [{type: String}],
    study: {type: String, required: true},
    degree: {type: String, required: true},
});
const Gallery = new Schema({
    img: {type: String, required: true},
    text: {type: String, required: true}
});
const Comment = new Schema({
    name: {type: String, required: true},
    comment: {type: String, required: true}
});
const Service = new Schema({
    title: {type: String, required: true},
    xizmat: [{type: Object, required: true}]
});
const Price = new Schema({
    xizmat: {type: String, required: true},
    narx: {type: String, required: true},
    eslatma: {type: String},
});
const Block = new Schema({
    miniTitle: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String, required: true},
    link: {type: String, required: true},
});

module.exports.Doctor = model('Doctor', Doctor);
module.exports.Gallery = model('Gallery', Gallery);
module.exports.Service = model('Service', Service);
module.exports.Price = model('Price', Price);
module.exports.Comment = model('Comment', Comment);
module.exports.Block = model('Block', Block);
