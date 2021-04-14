package com.tradeledger.cards.eligibility.common.domain;

import com.tradeledger.cards.eligibility.common.domain.exceptions.EligibilityCheckException;

public class CardsApplicationService {
    private final EligibilityProvider provider;
    private final ApplicantEligibilityRepository repository;

    public CardsApplicationService(EligibilityProvider provider, ApplicantEligibilityRepository repository) {
        this.provider = provider;
        this.repository = repository;
    }

    public EligibleCards apply(Applicant applicant) throws EligibilityCheckException {
        EligibleCards eligibleCards = provider.check(applicant);
        repository.update(applicant, eligibleCards);

        return eligibleCards;
    }
}
