import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogSideBarTagsComponent } from './blog-side-bar-tags/blog-side-bar-tags.component';
import { BlogSideBarPostsComponent } from './blog-side-bar-posts/blog-side-bar-posts.component';
import { BlogSideBarContentComponent } from './blog-side-bar-content/blog-side-bar-content.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { blogContent, popularPosts, tagsList } from './interface/blogInterface';
import { CommonModule } from '@angular/common';
import { title } from 'process';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BlogSideBarTagsComponent, BlogSideBarPostsComponent, BlogSideBarContentComponent, BlogMainComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dataArray: blogContent[] = [
    {
      title: "BMW M5 Blog",
      imgUrl: "https://imgs.search.brave.com/c-ME5F3SryeYimNzm37mmBq_RIVyi7a8qplxNSKK4ds/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmhvdGNhcnNp/bWFnZXMuY29tL3dv/cmRwcmVzcy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNy9C/TVctTTUtQ29tcGV0/aXRpb24tRnJvbnQu/anBn",
      titleDescription: 'Newest Model Of BMW ',
      titleDate: 'April 7, 2014',
      description: `BMW M5 Competition is the top model in the M5 lineup and the price of M5
      top model is Rs. 1.74 Crore. BMW M5 Competition is available in Automatic
      (TC) transmission and offered in 8 colours: Snapper Rocks Blue Metallic,
      Black Sapphire Metallic, Marina Bay Blue Metallic, Brands Hatch Grey
      Metallic, Motegi Red Metallic, Bluestone Metallic, Donington Grey Metallic
      and Alpine White.`
    },
    {
      title: "Ford Mustang GT",
      imgUrl: "https://imgs.search.brave.com/5wiOQ0XDgf53ArBWpT-5jjZVfpu24NDJUkE8VgkhDIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/bWVkaWEuZGVhbGVy/ZmlyZS5jb20vd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzM0/Ny8yMDE4LzA4LzIw/MTgtUnVieS1SZWQt/TXVzdGFuZy1HVC1D/b3VwZS1CX28uanBn",
      titleDescription: 'Ford Mustang GT Fastback blog',
      titleDate: 'April 2, 2014',
      description: `Ford Mustang GT Fastback 5.0L v8 is the top model in the Mustang
            lineup and the price of Mustang top model is Rs. 74.61 Lakh. It
            gives a mileage of 7.9 kmpl. Ford Mustang GT Fastback 5.0L v8 is
            available in Automatic transmission and offered in 6 colours:
            Absolute Black, Magnetic, Ingot Silver, Race Red, Oxford White and
            Triple Yellow Tri-coat.`
    }
  ]
  popularPosts: popularPosts[] = [
    {
      title: "Nissan",
      imgUrl: "https://imgs.search.brave.com/meBDo8_ro7x-S3k5kVu4NaL0Z2rklhV0GPaQcw37ONA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmlzc2FudXNhLmNv/bS9jb250ZW50L2Rh/bS9OaXNzYW4vdXMv/dmVoaWNsZXMvZ3Ry/LzIwMjQvc2l0ZS1z/aW1wL292ZXJ2aWV3/L3BmYS8yMDI0LW5p/c3Nhbi1ndC1yLXNw/b3J0cy1jYXItbGln/aHQtZ3JlZW4tc2lk/ZS1wcm9maWxlLXZp/ZXcuanBn",
      description: "Nissan gtr",
    },
    {
      title: "Lamborgini",
      imgUrl: "https://imgs.search.brave.com/OdEcCEut7XUuuckYuDKgC2sEza4OK7Lfapb2n6QCR1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzk3LzU5Lzgx/LzM2MF9GXzY5NzU5/ODExNV82SUUyeVFX/VGxwYlp5R1VtaG1C/SWM1enY0QjJxYzlr/US5qcGc",
      description: "Lamborgini supper cars",
    },
    {
      title: "ferrari",
      imgUrl: "https://imgs.search.brave.com/Wte_55maa9Z9KaMov0ur_CIdFMR2RMkOMrSWySsBJ3I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3VwZXJjYXJzLm5l/dC9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAxLzE4/OTY0ODc3NjkwX2Yy/OGQxN2E0NjFfay5q/cGc",
      description: "ferrari supper cars"
    },
    {
      title: "Maserati",
      imgUrl: "https://imgs.search.brave.com/IWVZTosABSJGFVyKgPPvaiObYFj5QQX4u_PhKH7zWuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDI0/LW1hc2VyYXRpLWdy/YW5jYWJyaW8tZnJv/bnQtdGhyZWUtcXVh/cnRlcnMtNjVkZTNk/M2EyNDQyNi5qcGc_/Y3JvcD0wLjYxNXh3/OjEuMDB4aDswLjE2/OXh3LDAmcmVzaXpl/PTM2MDoq",
      description: "Maserati mc cielo"
    }
  ]
  sideTags: tagsList[] = [
    { title: "Maserati" }, { title: "London" }, { title: "IKEA" }, { title: "NORWAY" }, { title: "DIY" }, { title: "Ideas" }, { title: "Baby" }, { title: "Family" }, { title: "News" }, { title: "Clothing" }, { title: "Shopping" }, { title: "Sports" }, { title: "Games" }
  ]
}
