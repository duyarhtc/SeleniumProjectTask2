package pages;

import org.openqa.selenium.By;

import java.util.Hashtable;

public class FirstProductPage extends BasePage {
    public Hashtable<String, By> firstProductElements;

    public FirstProductPage() {
        super();
        this.firstProductElements = new Hashtable<>();
        firstProductElements.put("product name area",By.xpath("//*[@id=\"product-detail-app\"]/div/div[2]/div[1]/div[2]/div[1]/div/div/div[1]/h1/span"));
        firstProductElements.put("add cart button", By.className("add-to-basket-button-text"));
        firstProductElements.put("my cart area", By.xpath("//*[@id=\"account-navigation-container\"]/div/div[2]/a/p"));
        this.pageElements = firstProductElements;
    }
}
