"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// interface IRecurso{
//     id: string;
//     nombre: string;
// }
const router = (0, express_1.Router)();
router.get('/users', (req, res) => {
    res.send('todo ok');
});
exports.default = router;
