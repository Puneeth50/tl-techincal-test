package runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features",glue = {"stepIntegration"},
        strict = true,plugin = "html:build/cucumber")
public class CucumberRunner {


}
