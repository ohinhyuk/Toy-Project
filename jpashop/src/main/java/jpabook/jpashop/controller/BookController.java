package jpabook.jpashop.controller;

import jpabook.jpashop.domain.item.Book;
import jpabook.jpashop.domain.item.Item;
import jpabook.jpashop.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class BookController {

    private final ItemService itemService;

    @GetMapping("/items/new")
    public String createItem(Model model){
        model.addAttribute("form", new BookForm());
        return "items/createItemForm";
    }

    @PostMapping("/items/new")
    public String create(BookForm form){
        Book book = new Book();

        // setter를 사용하는 것보다 Book에 static 생성자를 통해 setter를 다 없애주는 것이 좋다.
        book.setName(form.getName());
        book.setPrice(form.getPrice());
        book.setStockQuantity(form.getStockQuantity());
        book.setAuthor(form.getAuthor());
        book.setIsbn(form.getIsbn());

        itemService.saveItem(book);
        return "redirect:/";
    }

    @GetMapping("/items")
    public String list(Model model){
        List<Item> items = itemService.findItems();
        model.addAttribute("items", items);
        return "items/itemList";
    }

    @GetMapping("items/{itemId}/edit")
    public String updateItemForm(@PathVariable("itemId") Long itemId , Model model){
        Book item = (Book) itemService.findOne(itemId);

        BookForm form = new BookForm();
        form.setId(item.getId());
        form.setName(item.getName());
        form.setAuthor(item.getAuthor());
        form.setStockQuantity(item.getStockQuantity());
        form.setPrice(item.getPrice());
        form.setIsbn(item.getIsbn());

        model.addAttribute("form",form);

        return "items/updateItemForm";
    }

    @PostMapping("items/{itemId}/edit")
    public String updateItem(@PathVariable("itemId") Long itemId ,@ModelAttribute("form") BookForm form){
//       머지를 하기 위한 과정 + 어설프게 만든 객체
//        Book book = new Book();
//        book.setName(form.getName());
//        book.setId(form.getId());
//        book.setPrice(form.getPrice());
//        book.setStockQuantity(form.getStockQuantity());
//        book.setAuthor(form.getAuthor());
//        book.setIsbn(form.getIsbn());

//        itemService.saveItem(book);

        itemService.updateItem(itemId, form.getName(), form.getPrice() , form.getStockQuantity());
        return "redirect:/items";
    }

}
