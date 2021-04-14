package com.tradeledger.cards.eligibility.repository;

import com.tradeledger.cards.eligibility.common.domain.Applicant;
import com.tradeledger.cards.eligibility.common.domain.EligibleCards;
import com.tradeledger.cards.eligibility.common.domain.ApplicantEligibilityRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;


@Service
public class InMemoryApplicantEligibilityRepository implements ApplicantEligibilityRepository {

    // TODO: thread safety
    private final Map<String, EligibleCards> eligibleCardsMap;
    private final Map<String, Applicant> applicantMap;

    InMemoryApplicantEligibilityRepository() {
        eligibleCardsMap = new HashMap<>();
        applicantMap = new HashMap<>();
    }

    public void update(Applicant applicant, EligibleCards eligibleCards) {
        applicantMap.put(applicant.getEmail(), applicant);
        eligibleCardsMap.put(applicant.getEmail(), eligibleCards);
    }

    public EligibleCards get(Applicant applicant) {
        return eligibleCardsMap.get(applicant.getEmail());
    }
}
