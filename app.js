const https = require("https");
const fs = require("fs");
const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static('public'));

const agent = new https.Agent({
  key: fs.readFileSync("./keys/key_0e1fed69-1708-4209-a6b5-979ee808893f.pem"),
  cert: fs.readFileSync("./keys/cert.pem")
});

const instance = axios.create();
instance.defaults.baseURL = "https://sandbox.api.visa.com/vpa/v1/";
instance.defaults.httpsAgent = agent;
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
instance.defaults.headers.common["Authorization"] =
  "Basic SzZMMjdPSlBZRVFDSU5ZNEtBSUwyMTdSRGFjMTg2ZkQ5UDFMaVVoUzY3OVYzOHNpVTpPOUN1NTE2MTJ5MUtxUzF3ZnFNbllwNHJuUG00ODNMaU1ZZ3Y=";


  app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});


app.post("/account", (req, res) => {
  instance
    .post("proxy/GetAccountStatus", {
      "messageId": "1526078591578",
      "clientId": "B2BWS_1_1_9999",
      "buyerId": "9999",
      "proxyNumber": "Proxy12345",
      "accountRequestId": "2896410"
    })
    .then(function(response) {
      res.status(200).json(response.data)
    })
    .catch(function(error) {
      res.status(400).json({message: 'Could not process account due to bad or incomplete data inputs'})
    });
});


app.post("/supplier", (req, res) => {
  instance
    .post("supplier/CreateSupplier", {
      "messageId": "1525731018854",
      "clientId": "B2BWS_1_1_9999",
      "buyerId": "9210101012",
      "supplierId": "APISupp-102",
      "supplierName": req.body.supplierName,
      "supplierType": "VPA",
      "supplierAddressLine1": req.body.supplierAddressLine1,
      "supplierCity": req.body.supplierCity,
      "supplierCountryCode": req.body.supplierCountryCode,
      "supplierDate": req.body.supplierDate
    })
    .then(function(response) {
      console.log(response.data)
      res.status(200).json(response.data)
    })
    .catch(function(error) {
      console.log('Error', error)
      res.status(400).json({ message: 'Could not create supplier due to bad or incomplete data inputs'})
    });
});


app.post("/payment", (req, res) => {
  instance
    .post("payment/ProcessPayments", {
      messageId: "1526327698270",
      clientId: "B2BWS_1_1_9999",
      buyerId: "9999",
      actionType: "1",
      payment: {
        accountNumber: req.body.accountNumber,
        accountType: req.body.accountType,
        accountLimit: "100",
        cardAccountExpiryDate: req.body.cardAccountExpiryDate,
        paymentGrossAmount: req.body.paymentGrossAmount,
        currencyCode: req.body.currencyCode,
        paymentExpiryDate: "2018-05-30",
        paymentRequestDate: "2018-05-14",
        paymentType: "CCC",
        supplier: {
          supplierId: "RESTAPISupp-007",
          supplierName: "RESTAPISupp-007",
          supplierType: "VPA",
          stpId: "",
          supplierAddressLine1: "Address1",
          supplierAddressLine2: "Address2",
          supplierCity: "FC",
          supplierState: "CA",
          supplierPostalCode: "94404",
          supplierCountryCode: "USA",
          supplierLanguage: "en_US",
          defaultCurrencyCode: "USD",
          supplierGLCode: "12345",
          enablePin: "N",
          supplierDate: "MMDDYYYY",
          primaryEmailAddress: "abc@company.com",
          alternateEmailAddresses: [
            {
              alternateEmailAddress: "abc@company.com"
            }
          ],
          emailNotes: "B2B WS CVV2 Payment for FXD Account"
        },
        invoices: [
          {
            invoiceNumber: "INV01",
            invoiceDate: "2018-04-24",
            invoiceAmount: "3.75",
            PurchaseOrderNumber: "PO1234",
            PurchaseOrderDate: "2018-02-01"
          },
          {
            invoiceNumber: "INV02",
            invoiceDate: "2018-04-24",
            invoiceAmount: "1.25",
            PurchaseOrderNumber: "PO1234",
            PurchaseOrderDate: "2018-02-01"
          }
        ],
        ReferenceFields: ["1234", "12356"],
        PartialPaymentIndicator: "y"
      }
    })
    .then(function(response) {
      res.status(200).json(response.data)
    })
    .catch(function(error) {
      res.status(400).json({message: 'Could not process payments due to bad or incomplete data inputs'});
    });
});


app.post('/requisition', (req, res) => {
  instance
  .post("accountManagement/VirtualCardRequisition", {
    messageId: "1526417600960",
    clientId: "B2BWS_1_1_9999",
    buyerId: 9999,
    accountNumber: "",
    proxyPoolId: "M1",
    employee: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      employeeId: req.body.employeeId,
      companyAdminEMailId: "compAdmin@bbb.com",
      eMailId: "compAdmin@bbb.com",
      costCenter: "1",
      gl: "1",
      address: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        countryCode: "USA"
      }
    },
    optionalField1: "1",
    optionalField2: "2",
    optionalField3: "3",
    optionalField4: "4",
    optionalField5: "5",
    requisitionDetails: [
      {
        startDate: "2018-05-15",
        endDate: "2018-05-30",
        timeZone: "UTC+08",
        rules: [
          {
            ruleCode: "SPV",
            overrides: [
              {
                sequence: 1,
                overrideCode: "spendLimitAmount",
                overrideValue: 10000
              },
              {
                sequence: 2,
                overrideCode: "maxAuth",
                overrideValue: 50
              },
              {
                sequence: "3",
                overrideCode: "amountCurrencyCode",
                overrideValue: "840"
              },
              {
                sequence: "4",
                overrideCode: "rangeType",
                overrideValue: "3"
              },
              {
                sequence: "5",
                overrideCode: "startDate",
                overrideValue: "05/15/2018"
              },
              {
                sequence: "5",
                overrideCode: "endDate",
                overrideValue: "05/30/2018"
              },
              {
                sequence: "7",
                overrideCode: "updateFlag",
                overrideValue: "NOCHANGE"
              }
            ]
          },
          {
            ruleCode: "PUR",
            overrides: [
              {
                sequence: "0",
                overrideCode: "amountCurrencyCode",
                overrideValue: "840"
              },
              {
                sequence: "0",
                overrideCode: "amountValue",
                overrideValue: "55"
              }
            ]
          },
          {
            ruleCode: "EAM",
            overrides: [
              {
                sequence: "0",
                overrideCode: "amountCurrencyCode",
                overrideValue: "840"
              },
              {
                sequence: "0",
                overrideCode: "amountValue",
                overrideValue: "55"
              }
            ]
          },
          {
            ruleCode: "XBRA",
            overrides: [
              {
                sequence: "0",
                overrideCode: "amountCurrencyCode",
                overrideValue: "840"
              },
              {
                sequence: "0",
                overrideCode: "amountValue",
                overrideValue: "55"
              }
            ]
          },
          {
            ruleCode: "ATML",
            overrides: [
              {
                sequence: "0",
                overrideCode: "amountCurrencyCode",
                overrideValue: "840"
              },
              {
                sequence: "0",
                overrideCode: "amountValue",
                overrideValue: "55"
              }
            ]
          },
          {
            ruleCode: "TOLRNC",
            overrides: [
              {
                sequence: "0",
                overrideCode: "amountCurrencyCode",
                overrideValue: "840"
              },
              {
                sequence: "0",
                overrideCode: "minValue",
                overrideValue: "1"
              },
              {
                sequence: "0",
                overrideCode: "maxValue",
                overrideValue: "50"
              }
            ]
          },
          {
            ruleCode: "CAID",
            overrides: [
              {
                sequence: "0",
                overrideCode: "CAIDValue",
                overrideValue: "55"
              }
            ]
          },
          {
            ruleCode: "ATM"
          },
          {
            ruleCode: "ECOM"
          },
          {
            ruleCode: "CNP"
          },
          {
            ruleCode: "NOC"
          },
          {
            ruleCode: "ADT"
          },
          {
            ruleCode: "XBR"
          },
          {
            ruleCode: "FUEL"
          },
          {
            ruleCode: "HOT"
          },
          {
            ruleCode: "AUTO"
          },
          {
            ruleCode: "AIR"
          },
          {
            ruleCode: "REST"
          },
          {
            ruleCode: "JEWL"
          },
          {
            ruleCode: "ELEC"
          },
          {
            ruleCode: "ALC"
          },
          {
            ruleCode: "GTM"
          },
          {
            ruleCode: "OSS"
          },
          {
            ruleCode: "GROC"
          },
          {
            ruleCode: "ENT"
          },
          {
            ruleCode: "UTIL"
          },
          {
            ruleCode: "CLOTH"
          },
          {
            ruleCode: "MED"
          },
          {
            ruleCode: "VPAS",
            overrides: [
              {
                sequence: "0",
                overrideCode: "amountCurrencyCode",
                overrideValue: "840"
              },
              {
                sequence: "0",
                overrideCode: "amountValue",
                overrideValue: "65"
              },
              {
                sequence: "1",
                overrideCode: "amountValue",
                overrideValue: "205"
              }
            ]
          },
          {
            ruleCode: "DOM",
            overrides: [
              {
                sequence: "0",
                overrideCode: "cardAcceptorStateOrProvinceCode",
                overrideValue: "15"
              }
            ]
          }
        ]
      }
    ]
  })
  .then(function(response) {
    res.status(200).json(response.data);
  })
  .catch(function(error) {
    res.status(400).json({message: 'Could not process requisition due to bad or incomplete data inputs'});
  });
})


const port = process.env.PORT || 5000;


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
