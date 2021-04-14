package com.tradeledger.cards.eligibility.common.domain;

public interface ApplicantEligibilityRepository {
    void update(Applicant applicant, EligibleCards eligibleCards);
    EligibleCards get(Applicant applicant);
}
