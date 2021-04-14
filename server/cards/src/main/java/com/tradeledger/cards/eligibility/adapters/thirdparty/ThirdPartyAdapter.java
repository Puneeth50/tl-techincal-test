package com.tradeledger.cards.eligibility.adapters.thirdparty;

import com.tradeledger.cards.eligibility.common.domain.Applicant;
import com.tradeledger.cards.eligibility.common.domain.EligibleCards;
import com.tradeledger.cards.eligibility.common.domain.EligibilityProvider;
import com.tradeledger.cards.eligibility.common.domain.exceptions.EligibilityCheckException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;

@Service
public class ThirdPartyAdapter implements EligibilityProvider {

    @Value("${eligibility.provider.url}")
    String eligibilityProviderUrl;

    private String eligibilityCheckUrl() {
        return eligibilityProviderUrl + "/eligibility/check";
    }

    public EligibleCards check(Applicant applicant) throws EligibilityCheckException {

        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<Applicant> request = new HttpEntity<>(applicant);
        ResponseEntity<EligibleCardsMapper> response;

        try {
            response = restTemplate.postForEntity(
                    eligibilityCheckUrl(), request, EligibleCardsMapper.class
            );
        } catch (Exception e) {
            // TODO: properly store error messages somewhere
            throw new EligibilityCheckException();
        }

        if (response.getBody() == null) {
            throw new EligibilityCheckException();
        }
        return Objects.requireNonNull(response.getBody()).toDomain();
    }
}
