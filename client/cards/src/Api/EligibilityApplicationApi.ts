import axios from "axios"
import { Applicant } from "../Domain/Applicant"
import { EligibleCards } from "../Domain/EligibleCards"

interface EligibleCardsResponse {
    eligibleCards: String[]
};

const EligibilityServiceUrl = `http://localhost:8080`

export const CheckEligibility = async (applicant: Applicant): Promise<EligibleCards> => {

    try {
        // TODO: introduce config for external service based on environment
        const result = await axios.post<EligibleCardsResponse>(`${EligibilityServiceUrl}/cards/apply`, applicant);
        return {
            cards: result.data.eligibleCards
        };
    } catch (e) {
        // TODO: improve error messaging and rendering
        throw new Error(e.response && e.response.data.message ? e.response.data.message : "Failed to submit for a new product");
    }
}
