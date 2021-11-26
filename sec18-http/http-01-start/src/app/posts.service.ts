import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { catchError, map, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}

  error = new Subject<string>();

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ [key: string]: Post }>(
        "https://angular-sec18-6c756-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        postData,
        {
          // observe: 'body' is default setting. 'response' can give better insight details
          observe: "response",
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("key", "value");
    searchParams = searchParams.append("key2", "value2");
    searchParams = searchParams.append("print", "pretty");
    return this.http
      .get<{ [key: string]: Post }>(
        "https://angular-sec18-6c756-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        {
          headers: new HttpHeaders({
            "custom-header": "Hello Custom Header!",
          }),
          params: searchParams,
        }
      )
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(
        "https://angular-sec18-6c756-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        {
          observe: "events",
        }
      )
      .pipe(
        tap((response) => {
          console.log(response);
          // as we added events as observe, we will get response.type in response. This is an
          //  enum property which informs the type of the response {}
          if (response.type === HttpEventType.Response) {
            console.log(response.body);
          } else if (response.type === HttpEventType.Sent) {
            // here we can't use response.body, bcz Angular is clever enough to know HttpEventType.Sent has no body in return
            console.log(response);
          }
        })
      );
  }
}
