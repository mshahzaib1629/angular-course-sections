import { PostsService } from "./posts.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { title } from "process";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isLoading = false;
  error = null;
  errorSub: Subscription;
  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts;
      this.isLoading = false;
    });

    this.errorSub = this.postsService.error.subscribe((errorMsg) => {
      this.error = errorMsg;
    });
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.error = error.message;
        console.log(error);
      }
    );
  }

  handleError() {
    this.error = null;
  }


  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe((responseData) => {
      this.loadedPosts = [];
    });
  }
}
