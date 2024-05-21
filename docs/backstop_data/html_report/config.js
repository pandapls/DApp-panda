report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/backstop_default_qqmap_0_document_0_phone.png",
        "test": "../../../backstop_data/bitmaps_test/20240420-160612/backstop_default_qqmap_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_qqmap_0_document_0_phone.png",
        "label": "qqmap",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 1.9015068659618422,
          "misMatchPercentage": "1.90",
          "analysisTime": 13
        },
        "diffImage": "../../../backstop_data/bitmaps_test/20240420-160612/failed_diff_backstop_default_qqmap_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/backstop_default_qqmap_0_document_1_tablet.png",
        "test": "../../../backstop_data/bitmaps_test/20240420-160612/backstop_default_qqmap_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_qqmap_0_document_1_tablet.png",
        "label": "qqmap",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found /Users/yuanzhijia/Desktop/yd-web3-interface/backstop_data/bitmaps_reference/backstop_default_qqmap_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});