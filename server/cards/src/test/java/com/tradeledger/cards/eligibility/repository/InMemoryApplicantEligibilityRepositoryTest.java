package com.tradeledger.cards.eligibility.repository;

import com.tradeledger.cards.eligibility.common.domain.Applicant;
import com.tradeledger.cards.eligibility.common.domain.EligibleCards;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.HashSet;

import static org.assertj.core.api.Assertions.assertThat;

public class InMemoryApplicantEligibilityRepositoryTest {
    @Test
    public void testUpdatingUserRecord() {
        Applicant applicant = new Applicant("Name", "Email", "Address");
        EligibleCards eligibleCards = new EligibleCards(new HashSet<>(Arrays.asList("C1", "C2", "C3")));
        InMemoryApplicantEligibilityRepository repository = new InMemoryApplicantEligibilityRepository();

        repository.update(applicant, eligibleCards);

        assertThat(repository.get(applicant).getEligibleCards()).hasSize(3);
        assertThat(repository.get(applicant).getEligibleCards()).contains("C1");
        assertThat(repository.get(applicant).getEligibleCards()).contains("C2");
        assertThat(repository.get(applicant).getEligibleCards()).contains("C3");
    }
}
