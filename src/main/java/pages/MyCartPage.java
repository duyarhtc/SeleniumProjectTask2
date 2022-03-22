package pages;
import org.openqa.selenium.By;

import java.util.Hashtable;

public class MyCartPage extends BasePage{
    public Hashtable<String, By> mycartElements;

    public MyCartPage() {
        super();
        this.mycartElements= new Hashtable<>();
        mycartElements.put("info empty cart",By.className("i-bagg"));
        mycartElements.put("cart info header text", By.className("pb-header"));

        this.pageElements = mycartElements;
    }
}
