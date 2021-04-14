package com.tradeledger.cards.eligibility.adapters.web;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import javax.validation.Valid;

import com.tradeledger.cards.eligibility.common.domain.*;
import com.tradeledger.cards.eligibility.common.domain.exceptions.EligibilityCheckException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("cards")
@CrossOrigin
public class CardsApplicationEndpoint {

    @Autowired
    private CardsApplicationService application;

    @PostMapping(path = "apply", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public EligibleCards checkEligibility(@Valid @RequestBody Applicant applicant) throws EligibilityCheckException {

        return application.apply(applicant);
    }

}
