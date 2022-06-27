const {Doctor, Gallery, Service, Price, Comment, Block} = require('./models');
const Router = require('express');
const router = new Router();

router.get('/shifokorlar', async (req, res) => {
    try {
        const x = await Doctor.find();
        return res.json(x)
    } catch (e) {
        res.json({message: 'error'});
        console.log(e)
    }
});
router.get('/xizmatlar', async (req, res) => {
    try {
        const x = await Service.find();
        return res.json(x)
    } catch (e) {
        res.json({message: 'error'});
        console.log(e)
    }
});
router.get('/izohlar', async (req, res) => {
    try {
        const x = await Comment.find();
        return res.json(x)
    } catch (e) {
        res.json({message: 'error'});
        console.log(e)
    }
});
router.get('/galereya', async (req, res) => {
    try {
        const x = await Gallery.find();
        return res.json(x)
    } catch (e) {
        res.json({message: 'error'});
        console.log(e)
    }
});
router.get('/narxlar', async (req, res) => {
    try {
        const x = await Price.find();
        return res.json(x)
    } catch (e) {
        res.json({message: 'error'});
        console.log(e)
    }
});
router.get('/blocks', async (req, res) => {
    try {
        const x = await Block.find();
        return res.json(x)
    } catch (e) {
        res.json({message: 'error'});
        console.log(e)
    }
});
router.get('/eslatmalar', async (req, res) => {
    try {
        return res.json({
            image: "/assets/images/notes.jpg",
            content: "Sanatoriyaga borish uchun yashash joyidagi poliklinikada kurort kartasini rasmiylashtirish kerak.\n\n– “OQ-TOSH” sanatoriyasi yo’llanmasi narxiga yotoqxona, kuniga uch mahal ovqatlanish va davolanish kiradi\n\n– O’zbekistonning sanatoriylarida bolalar 4 yoshida qabul qilinadi\n\nSanatoriyada bemorlar uchun Toshkent viloyatidagi Chorvoq dengiziga va ziyoratgohlarga sayyohlik ekskursiyalari uyushtiriladi. Davolash uchun ko’rsatma: sil kasalligi bo’lmagan nafas yo’llari kasalliklari. Yoki bo’lmasam siz o’zingiz Amirsoy, Bildirsoy va Chimyonga sayohat uyushtirishingiz ham mumkin\n\nMijozlar yuqori malakali shifokorlar tomonidan davolanadilar. Sihatgohning samimiy tibbiyot hodimlari mijozlar uchun beminnat xizmat ko’rsatishadi."
        })
    } catch (e) {
        res.json({message: 'error'});
        console.log(e)
    }
});

module.exports = router;