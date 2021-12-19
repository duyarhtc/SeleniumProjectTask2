package pages;

import org.openqa.selenium.By;

import java.util.Hashtable;

public class HomePage extends BasePage {

    public Hashtable<String, By> homeElements;

    public HomePage() {
        super();
        this.homeElements = new Hashtable<>();
        homeElements.put("homepage popup image",By.className("homepage-popup"));
        homeElements.put("homepage popUp close",By.id("Group-38"));
        homeElements.put("sign in title", By.className("link-text"));
        homeElements.put("login button", By.className("link-text"));
        homeElements.put("search input box", By.className("search-box"));

        this.pageElements = homeElements;
    }
}
