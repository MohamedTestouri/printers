
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Client = require("../models/client");

/* Client functions */
exports.showClient = (req, res) => {
    Client.find({}).then((clients) => {
        res.render("client/Client", { clients });
    }).catch((error) => {
        return res.status(500).json(error);
    });
};
exports.addForm = (req, res) => {
    res.render("client/addClient");
};
exports.editForm = (req, res) => {
    res.render("client/editClient", { id: req.params.id });
};

exports.addClient = (req, res) => {
    const client = new Client({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        contractDate: req.body.contractDate,
        contractDuration: req.body.constDuration,
        costA4Black: req.body.costA4Black,
        costA4Color: req.body.costA4Color,
        costA3Black: req.body.costA3Black,
        costA3Color: req.body.costA3Color,
        min_billing: req.body.min_billing,
    });
    client.save().then((result) => {
        res.redirect("/client/show");
    }).catch((error) => {
        return res.status(error.code).json({ error: error.message });
    });
};

exports.editClient = (req, res) => {

    Client.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        contractDate: req.body.contractDate,
        contractDuration: req.body.constDuration,
        costA4Black: req.body.costA4Black,
        costA4Color: req.body.costA4Color,
        costA3Black: req.body.costA3Black,
        costA3Color: req.body.costA3Color,
        min_billing: req.body.min_billing,
    }).then((result) => {
        res.redirect("/client/show");
    }).catch((error) => {
        return res.status(error.code).json(error);
    });
};

exports.removeClient = (req, res) => {
    Client.findByIdAndDelete(req.params.id).then((result) => {
        res.redirect("/client/show");
    }).catch((error) => {
        return res.status(error.code).json(error);
    });
};

/* Facture functions */
exports.showFacture = (req, res) => {
    Client.find({ _id: req.params.id }).then((client) => {
        const clients = client[0];
        res.render("client/FactureClient", { clients });
    }).catch((error) => {
        return res.status(500).json({ error: error.message });
    });


};
exports.addFactureForm = (req, res) => {
    res.render("client/addFactureClient", { id: req.params.id });
};
exports.addFacture = (req, res) => {
    Client.update({ _id: req.params.id }, {
        $addToSet: {
            facture: [{
                _id: mongoose.Types.ObjectId(),
                date: req.body.date,
                total: req.body.total,
                file: req.body.file,
            }]
        }
    }).then((result) => {

        res.redirect('/client/show' + req.params.id);
    }).catch((error) => {
        return res.status(500).json({ error: error.message });
    });
};

exports.editFactureForm = (req, res) => {
    res.render("client/editFactureClient", { id: req.params.id, facture_id: req.params.facture_id });
};
exports.editFacture = (req, res) => {

    Client.update({ _id: req.params.id, "facture._id": req.body.facture_id },
        {
            $set: {
                "facture.$.date": req.body.date,
                "facture.$.total": req.body.total,
                "facture.$.file": req.body.file,
            }
        }
    ).then((result) => {
        res.redirect("/client/facture/show/" + req.params.id);
    }).catch((error) => {
        return res.status(500).json({ error: error.message });
    });

};

exports.removeFacture = (req, res) => {
    Client.update({ _id: req.params.id }, {
        $pull: {
            facture: { _id: req.params.facture_id }
        }
    }).then((result) => {
        res.redirect("/client/facture/show/" + req.params.id);
    }).catch((error) => {
        return res.status(500).json({ error: error.message });
    });
};

/* Printer functions */
exports.showPrinter = (req, res) => {
    Client.find({ _id: req.params.id }).then((client) => {
        const clients = client[0];
        res.render("client/PrinterClient", { clients });
    }).catch((error) => {
        return res.status(500).json({ error: error.message });
    });
};
exports.addPrinterForm = (req, res) => {
    res.render("client/addPrinterClient", { id: req.params.id });
};

exports.addPrinter = (req, res) => {
    Client.update({ _id: req.params.id }, {
        $addToSet: {
            printer: [{
                _id: mongoose.Types.ObjectId(),
                idPrinter: req.body.idPrinter,
                serialNumber: req.body.serialNumber,
                articleNumber: req.body.articleNumber,
                ip: req.body.ip,
                location: req.body.location,
                state: req.body.state,
                installationDate: req.body.installationDate,
                paperSum: req.body.paperSum,
                currentA4Black: req.body.currentA4Black,
                currentA4Color: req.body.currentA4Color,
                currentA3Black: req.body.currentA3Black,
                currentA3Color: req.body.currentA3Color,
                creationDate: req.body.creationDate,
                percBlack: req.body.percBlack,
                percCyan: req.body.percCyan,
                percMagenta: req.body.percMagenta,
                percYellow: req.body.percYellow,
                percBlackDrum: req.body.percBlackDrum,
                percCyanDrum: req.body.percCyanDrum,
                percYellowDrum: req.body.percYellowDrum,
                percMagentaDrum: req.body.percMagentaDrum,
            }]
        }
    }).then((result) => {

        res.redirect('/client/printer/show/' + req.params.id);
    }).catch((error) => {
        return res.status(500).json({ error: error.message });
    });


};
exports.editPrinterForm = (req, res) => {

    res.render("client/editPrinterClient", { id: req.params.id, printer_id: req.params.printer_id });
};

exports.editPrinter = (req, res) => {
    Client.update({ _id: req.params.id, "printer._id": req.params.printer_id },
        {
            $set: {
                "printer.$.idPrinter": req.body.idPrinter,
                "printer.$.serialNumber": req.body.serialNumber,
                "printer.$.articleNumber": req.body.articleNumber,
                "printer.$.ip": req.body.ip,
                "printer.$.location": req.body.location,
                "printer.$.state": req.body.state,
                "printer.$.installationDate": req.body.installationDate,
                "printer.$.paperSum": req.body.paperSum,
                "printer.$.currentA4Black": req.body.currentA4Black,
                "printer.$.currentA4Color": req.body.currentA4Color,
                "printer.$.currentA3Black": req.body.currentA3Black,
                "printer.$.currentA3Color": req.body.currentA3Color,
                "printer.$.creationDate": req.body.creationDate,
                "printer.$.percBlack": req.body.percBlack,
                "printer.$.percCyan": req.body.percCyan,
                "printer.$.percMagenta": req.body.percMagenta,
                "printer.$.percYellow": req.body.percYellow,
                "printer.$.percBlackDrum": req.body.percBlackDrum,
                "printer.$.percCyanDrum": req.body.percCyanDrum,
                "printer.$.percYellowDrum": req.body.percYellowDrum,
                "printer.$.percMagentaDrum": req.body.percMagentaDrum,
            }
        }
    ).then((result) => {
        res.redirect("/client/printer/show/" + req.params.id);
    }).catch((error) => {
        return res.status(500).json({ error: error.message });
    });
};

exports.removePrinter = (req, res) => {
    Client.update({ _id: req.params.id }, {
        $pull: {
            printer: { _id: req.params.printer_id }
        }
    }).then((result) => {
        res.redirect("/client/printer/show/" + req.params.id);
    }).catch((error) => {
        return res.status(500).json({ error: error.message });
    });
};

