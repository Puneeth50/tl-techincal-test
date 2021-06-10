package stepIntegration;

import config.Request;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import model.Persons;
import model.World;
import org.json.JSONObject;
import org.springframework.test.context.ContextConfiguration;

import java.util.Map;
import java.util.Optional;

@ContextConfiguration
public class Stepdefs {

    private World world = new World();
    private Request request = new Request();

    @Given("a {string} call to {string}")
    public void aCallTo(String httpMethod, String endPoint) {
        world.setMethod(httpMethod);
        world.setEndPointUrl(endPoint);
    }

    @When("performed HTTP request with body:")
    public void performedHTTPRequestWithBody(DataTable dataTable) {
        world.setResponse(request.processHttpRequest(world.getMethod(), world.getEndPointUrl(), new Persons(Optional.ofNullable(dataTable.row(0).get(1)).orElse(""), dataTable.row(1).get(1), dataTable.row(2).get(1))));
    }

    @Then("response HTTP status is {int}")
    public void responseHTTPStatusIs(int responseCode) {
        request.verifyResponseStatusValue(world.getResponse(), responseCode);
    }

    @And("response body has {string} eligibility card")
    public void responseBodyHasCardTypeEligibilityCard(String cardType) {
        request.verfiyEligibityCards(world.getResponse(), cardType);
    }

    @When("performed HTTP request with body without headers:")
    public void performedHTTPRequestWithBodyWithoutHeaders(DataTable dataTable) {
        world.setResponse(request.processHttpRequestWithoutHeaders(world.getMethod(), world.getEndPointUrl(), new Persons(Optional.ofNullable(dataTable.row(0).get(1)).orElse(""), dataTable.row(1).get(1), dataTable.row(2).get(1))));
    }

    @And("response body contains {string} error")
    public void responseBodyContainsError(String error) {
        request.verfiyErrorMessage(world.getResponse(), error);
    }

    @When("performed HTTP request with invalid body:")
    public void performedHTTPRequestWithInvalidBody(DataTable table){
        Map<String,String> tempMap = table.asMap(String.class,String.class);
        JSONObject jsonObject = new JSONObject();
        for(Map.Entry<String,String> entry:tempMap.entrySet()){
           jsonObject.put(entry.getKey(),entry.getValue());
        }
        world.setResponse(request.requestWithInvalidFieldNames(world.getEndPointUrl(),jsonObject.toString()));
    }
}
