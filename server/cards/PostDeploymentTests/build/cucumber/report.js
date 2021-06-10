$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/eligibilityCheckNegativePath.feature");
formatter.feature({
  "name": "Credit care eligibility check negative scenarios",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate request body fields with empty value which should result in error",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.step({
  "name": "performed HTTP request with body:",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "name",
        "\u003cname\u003e"
      ]
    },
    {
      "cells": [
        "address",
        "\u003c\u003e"
      ]
    },
    {
      "cells": [
        "email",
        "\u003c\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "response HTTP status is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "response body has \"\" eligibility card",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "address",
        "email"
      ]
    },
    {
      "cells": [
        "",
        "Woking,Surrey",
        "SDET@LT.com"
      ]
    },
    {
      "cells": [
        "Boris",
        "",
        "SDET@LT.com"
      ]
    },
    {
      "cells": [
        "Angela",
        "London",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate request body fields with empty value which should result in error",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body has \"\" eligibility card",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyHasCardTypeEligibilityCard(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate request body fields with empty value which should result in error",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body has \"\" eligibility card",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyHasCardTypeEligibilityCard(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \r\nExpected: is \u003c[]\u003e\r\n     but: was \u003c[C1]\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat config.Request.verfiyEligibityCards(Request.java:33)\r\n\tat stepIntegration.Stepdefs.responseBodyHasCardTypeEligibilityCard(Stepdefs.java:41)\r\n\tat ✽.response body has \"\" eligibility card(file:///C:/Users/sreekanth/Desktop/puneeth/tradeledger/sdet-interview-exercise/server/cards/PostDeploymentTests/src/test/resources/features/eligibilityCheckNegativePath.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validate request body fields with empty value which should result in error",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body has \"\" eligibility card",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyHasCardTypeEligibilityCard(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \r\nExpected: is \u003c[]\u003e\r\n     but: was \u003c[C1, C2]\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat config.Request.verfiyEligibityCards(Request.java:33)\r\n\tat stepIntegration.Stepdefs.responseBodyHasCardTypeEligibilityCard(Stepdefs.java:41)\r\n\tat ✽.response body has \"\" eligibility card(file:///C:/Users/sreekanth/Desktop/puneeth/tradeledger/sdet-interview-exercise/server/cards/PostDeploymentTests/src/test/resources/features/eligibilityCheckNegativePath.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validate request with invalid header",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with body without headers:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithBodyWithoutHeaders(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 415",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body contains \"Unsupported Media Type\" error",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyContainsError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Call Get HTTP Method to \"eligibility/check\" endpoint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"GET\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 405",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body contains \"Method Not Allowed\" error",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyContainsError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate request with Invalid field name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.step({
  "name": "performed HTTP request with invalid body:",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "\u003cname\u003e",
        "SDET"
      ]
    },
    {
      "cells": [
        "\u003caddress\u003e",
        "Woking"
      ]
    },
    {
      "cells": [
        "\u003cemail\u003e",
        "SDET@TL.com"
      ]
    }
  ]
});
formatter.step({
  "name": "response HTTP status is 400",
  "keyword": "Then "
});
formatter.step({
  "name": "response body contains \"Bad Request\" error",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "address",
        "email"
      ]
    },
    {
      "cells": [
        "name1",
        "address",
        "email"
      ]
    },
    {
      "cells": [
        "name",
        "address1",
        "email"
      ]
    },
    {
      "cells": [
        "name",
        "address",
        "email1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate request with Invalid field name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with invalid body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithInvalidBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body contains \"Bad Request\" error",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyContainsError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate request with Invalid field name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with invalid body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithInvalidBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body contains \"Bad Request\" error",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyContainsError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate request with Invalid field name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with invalid body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithInvalidBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body contains \"Bad Request\" error",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyContainsError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate request with Invalid endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"\u003cendPoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "performed HTTP request with invalid body:",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "name",
        "SDET"
      ]
    },
    {
      "cells": [
        "address",
        "Woking"
      ]
    },
    {
      "cells": [
        "email",
        "SDET@TL.com"
      ]
    }
  ]
});
formatter.step({
  "name": "response HTTP status is 404",
  "keyword": "Then "
});
formatter.step({
  "name": "response body contains \"Not Found\" error",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "endPoint"
      ]
    },
    {
      "cells": [
        "/eligibility/chec"
      ]
    },
    {
      "cells": [
        "/eligibility"
      ]
    },
    {
      "cells": [
        "/check"
      ]
    },
    {
      "cells": [
        "/ele/check"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate request with Invalid endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/chec\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with invalid body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithInvalidBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body contains \"Not Found\" error",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyContainsError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate request with Invalid endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with invalid body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithInvalidBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body contains \"Not Found\" error",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyContainsError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate request with Invalid endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with invalid body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithInvalidBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body contains \"Not Found\" error",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyContainsError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate request with Invalid endpoints",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/ele/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with invalid body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithInvalidBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body contains \"Not Found\" error",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyContainsError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/eligibiltyCheckHappyPath.feature");
formatter.feature({
  "name": "Check credit card eligibility happy path",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Perfectly matching person name to check card eligibility",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Eligibility"
    },
    {
      "name": "@HappyPath"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.step({
  "name": "performed HTTP request with body:",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "name",
        "\u003cname\u003e"
      ]
    },
    {
      "cells": [
        "address",
        "Woking,Surrey"
      ]
    },
    {
      "cells": [
        "email",
        "SDET@TL.com"
      ]
    }
  ]
});
formatter.step({
  "name": "response HTTP status is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "response body has \"\u003ccardType\u003e\" eligibility card",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "cardType"
      ]
    },
    {
      "cells": [
        "Boris",
        "C1"
      ]
    },
    {
      "cells": [
        "Angela",
        "C1,C2"
      ]
    },
    {
      "cells": [
        "Theresa",
        "C2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Perfectly matching person name to check card eligibility",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@HappyPath"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body has \"C1\" eligibility card",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyHasCardTypeEligibilityCard(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Perfectly matching person name to check card eligibility",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@HappyPath"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body has \"C1,C2\" eligibility card",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyHasCardTypeEligibilityCard(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Perfectly matching person name to check card eligibility",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Eligibility"
    },
    {
      "name": "@HappyPath"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "a \"POST\" call to \"/eligibility/check\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.aCallTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "performed HTTP request with body:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.performedHTTPRequestWithBody(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response HTTP status is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseHTTPStatusIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body has \"C2\" eligibility card",
  "keyword": "And "
});
formatter.match({
  "location": "stepIntegration.Stepdefs.responseBodyHasCardTypeEligibilityCard(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});