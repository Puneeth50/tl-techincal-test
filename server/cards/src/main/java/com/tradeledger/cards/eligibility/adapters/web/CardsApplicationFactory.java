package com.tradeledger.cards.eligibility.adapters.web;

import com.tradeledger.cards.eligibility.common.domain.ApplicantEligibilityRepository;
import com.tradeledger.cards.eligibility.common.domain.CardsApplicationService;
import com.tradeledger.cards.eligibility.common.domain.EligibilityProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Service
public class CardsApplicationFactory {
    @Autowired
    private EligibilityProvider provider;

    @Autowired
    private ApplicantEligibilityRepository repository;

    @Bean
    CardsApplicationService create() {
        return new CardsApplicationService(provider, repository);
    }
}
