package com.tradeledger.cards.eligibility.common.domain;

import com.tradeledger.cards.eligibility.common.domain.exceptions.EligibilityCheckException;

public interface EligibilityProvider {
    EligibleCards check(Applicant applicant) throws EligibilityCheckException;
}
