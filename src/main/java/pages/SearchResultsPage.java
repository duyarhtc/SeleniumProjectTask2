package pages;

import org.openqa.selenium.By;

import java.util.Hashtable;

public class SearchResultsPage extends BasePage {

    public Hashtable<String, By> searchResultsElements;

    public SearchResultsPage() {
        this.searchResultsElements = new Hashtable<>();
        searchResultsElements.put("first product", By.xpath("//*[@id=\"search-app\"]/div/div[1]/div[2]/div[3]/div/div[1]/div[1]/a/div[1]/div[2]/div[2]"));
        this.pageElements = searchResultsElements;
    }
}