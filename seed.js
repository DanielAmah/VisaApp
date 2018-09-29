
instance.post('payment/ProcessPayments', {
  
  "messageId": "1526327698270",
  "clientId": "B2BWS_1_1_9999",
  "buyerId": "9999",
  "actionType": "1",
  "payment": {
  "accountNumber": "411111111111111",
  "accountType": "2",
  "accountLimit": "100",
  "cardAccountExpiryDate": "02/2021",
  "paymentGrossAmount": "2.50",
  "currencyCode": "USD",
  "paymentExpiryDate": "2018-05-30",
  "paymentRequestDate": "2018-05-14",
  "paymentType": "CCC",
  "supplier": {
  "supplierId": "RESTAPISupp-007",
  "supplierName": "RESTAPISupp-007",
  "supplierType": "VPA",
  "stpId": "",
  "supplierAddressLine1": "Address1",
  "supplierAddressLine2": "Address2",
  "supplierCity": "FC",
  "supplierState": "CA",
  "supplierPostalCode": "94404",
  "supplierCountryCode": "USA",
  "supplierLanguage": "en_US",
  "defaultCurrencyCode": "USD",
  "supplierGLCode": "12345",
  "enablePin": "N",
  "supplierDate": "MMDDYYYY",
  "primaryEmailAddress": "abc@company.com",
  "alternateEmailAddresses": [
  {
  "alternateEmailAddress": "abc@company.com"
  }
  ],
  "emailNotes": "B2B WS CVV2 Payment for FXD Account"
  },
  "invoices": [
  {
  "invoiceNumber": "INV01",
  "invoiceDate": "2018-04-24",
  "invoiceAmount": "3.75",
  "PurchaseOrderNumber": "PO1234",
  "PurchaseOrderDate": "2018-02-01"
  },
  {
  "invoiceNumber": "INV02",
  "invoiceDate": "2018-04-24",
  "invoiceAmount": "1.25",
  "PurchaseOrderNumber": "PO1234",
  "PurchaseOrderDate": "2018-02-01"
}
],
"ReferenceFields": [
"1234",
"12356"
],
"PartialPaymentIndicator": "y"
}
})
.then(function (response) {
  console.log('Process Payment', response.data);
})
.catch(function (error) {
  console.log('This is the error', error);
});


instance.post('supplier/CreateSupplier', {
  "messageId": "1525731018854",
	"clientId": "B2BWS_1_1_9999",
	"buyerId": "9210101012",
	"supplierId": "APISupp-102",
	"supplierName": "APISupp-102",
	"supplierType": "VPA",
	"stpId": "",
	"supplierAddressLine1": "Address1",
	"supplierAddressLine2": "Address2",
	"supplierCity": "FC",
	"supplierState": "CA",
	"supplierPostalCode": "94404",
	"supplierCountryCode": "USA",
	"supplierLanguage": "en_US",
	"defaultCurrencyCode": "USD",
	"supplierGLCode": "12345",
	"enablePin": "",
	"supplierDate": "MMDDYYYY",
	"primaryEmailAddress": "test@visa.com",
	"ccEmailAddresses": [
	"test1@visa.com",
	"test2@visa.com",
	"test3@visa.com",
	"aaa@bb.com",
	"aaaa1@cc.com"
	],
	"securityAnswers": [
	{
	"questionAnswer": {
	"securityAnswer": "Test",
	"questionNumber": "1"
	}
	},
	{
	"questionAnswer": {
	"securityAnswer": "test2",
	"questionNumber": "2"
	}
	},
	{
	"questionAnswer": {
	"securityAnswer": "test3",
	"questionNumber": "3"
	}
	}
	],
	"paymentControlRequired": "Y",
	"securityCodeRequired": "Y",
	"reminderNotificationRequired": "Y",
	"invoiceAttachmentRequired": "Y",
	"reminderNotificationDays": "9",
	"paymentExpirationDays": "10",
	"cardDetails": {
	"actionType": "1",
	"accountType": "1",
	"accountLimit": "100",
	"accountNumber": "",
	"expirationDate": "",
	"currencyCode": "",
	"proxyNumber": ""
	}
})
.then(function (response) {
  console.log('Create Supplier', response.data);
})
.catch(function (error) {
  console.log('This is the error', error);
});


instance.post('accountManagement/VirtualCardRequisition', {
  "messageId": "1526417600960",
  "clientId": "B2BWS_1_1_9999",
  "buyerId": 9999,
  "accountNumber": "",
  "proxyPoolId": "M1",
  "employee": {
  "firstName": "FirstName",
  "lastName": "LastName",
  "employeeId": "ABCD123",
  "companyAdminEMailId": "compAdmin@bbb.com",
  "eMailId": "compAdmin@bbb.com",
  "costCenter": "1",
  "gl": "1",
  "address": {
  "addressLine1": "",
  "addressLine2": "",
  "city": "",
  "state": "",
  "postalCode": "",
  "countryCode": "USA"
  }
  },
  "optionalField1": "1",
  "optionalField2": "2",
  "optionalField3": "3",
  "optionalField4": "4",
  "optionalField5": "5",
  "requisitionDetails": [
  {
  "startDate": "2018-05-15",
  "endDate": "2018-05-30",
  "timeZone": "UTC+08",
  "rules": [
  {
  "ruleCode": "SPV",
  "overrides": [
  {
  "sequence": 1,
  "overrideCode": "spendLimitAmount",
  "overrideValue": 10000
  },
  {
  "sequence": 2,
  "overrideCode": "maxAuth",
  "overrideValue": 50
  },
  {
  "sequence": "3",
  "overrideCode": "amountCurrencyCode",
  "overrideValue": "840"
  },
  {
  "sequence": "4",
  "overrideCode": "rangeType",
  "overrideValue": "3"
  },
  {
  "sequence": "5",
  "overrideCode": "startDate",
  "overrideValue": "05/15/2018"
  },
  {
  "sequence": "5",
  "overrideCode": "endDate",
  "overrideValue": "05/30/2018"
  },
  {
  "sequence": "7",
  "overrideCode": "updateFlag",
  "overrideValue": "NOCHANGE"
  }
  ]
  },
  {
  "ruleCode": "PUR",
  "overrides": [
  {
  "sequence": "0",
  "overrideCode": "amountCurrencyCode",
  "overrideValue": "840"
  },
  {
  "sequence": "0",
  "overrideCode": "amountValue",
  "overrideValue": "55"
  }
  ]
  },
  {
  "ruleCode": "EAM",
  "overrides": [
  {
  "sequence": "0",
  "overrideCode": "amountCurrencyCode",
  "overrideValue": "840"
  },
  {
  "sequence": "0",
  "overrideCode": "amountValue",
  "overrideValue": "55"
  }
  ]
  },
  {
  "ruleCode": "XBRA",
  "overrides": [
  {
  "sequence": "0",
  "overrideCode": "amountCurrencyCode",
  "overrideValue": "840"
  },
  {
  "sequence": "0",
  "overrideCode": "amountValue",
  "overrideValue": "55"
  }
  ]
  },
  {
  "ruleCode": "ATML",
  "overrides": [
  {
  "sequence": "0",
  "overrideCode": "amountCurrencyCode",
  "overrideValue": "840"
  },
  {
  "sequence": "0",
  "overrideCode": "amountValue",
  "overrideValue": "55"
  }
  ]
  },
  {
  "ruleCode": "TOLRNC",
  "overrides": [
  {
  "sequence": "0",
  "overrideCode": "amountCurrencyCode",
  "overrideValue": "840"
  },
  {
  "sequence": "0",
  "overrideCode": "minValue",
  "overrideValue": "1"
  },
  {
  "sequence": "0",
  "overrideCode": "maxValue",
  "overrideValue": "50"
  }
  ]
  },
  {
  "ruleCode": "CAID",
  "overrides": [
  {
  "sequence": "0",
  "overrideCode": "CAIDValue",
  "overrideValue": "55"
  }
  ]
  },
  {
  "ruleCode": "ATM"
  },
  {
  "ruleCode": "ECOM"
  },
  {
  "ruleCode": "CNP"
  },
  {
  "ruleCode": "NOC"
  },
  {
  "ruleCode": "ADT"
  },
  {
  "ruleCode": "XBR"
  },
  {
  "ruleCode": "FUEL"
  },
  {
  "ruleCode": "HOT"
  },
  {
  "ruleCode": "AUTO"
  },
  {
  "ruleCode": "AIR"
  },
  {
  "ruleCode": "REST"
  },
  {
  "ruleCode": "JEWL"
  },
  {
  "ruleCode": "ELEC"
  },
  {
  "ruleCode": "ALC"
  },
  {
  "ruleCode": "GTM"
  },
  {
  "ruleCode": "OSS"
  },
  {
  "ruleCode": "GROC"
  },
  {
  "ruleCode": "ENT"
  },
  {
  "ruleCode": "UTIL"
  },
  {
  "ruleCode": "CLOTH"
  },
  {
  "ruleCode": "MED"
  },
  {
  "ruleCode": "VPAS",
  "overrides": [
  {
  "sequence": "0",
  "overrideCode": "amountCurrencyCode",
  "overrideValue": "840"
  },
  {
  "sequence": "0",
  "overrideCode": "amountValue",
  "overrideValue": "65"
  },
  {
  "sequence": "1",
  "overrideCode": "amountValue",
  "overrideValue": "205"
  }
  ]
  },
  {
  "ruleCode": "DOM",
  "overrides": [
  {
  "sequence": "0",
  "overrideCode": "cardAcceptorStateOrProvinceCode",
  "overrideValue": "15"
  }
  ]
  }
  ]
  }
  ]
})
.then(function (response) {
  console.log('Virtual Card Requisition', response.data);
})
.catch(function (error) {
  console.log('This is the error', error);
});
