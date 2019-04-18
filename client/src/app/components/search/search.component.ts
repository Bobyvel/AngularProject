import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Observable } from "rxjs";
import { Ads } from "src/app/core/models/ads";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchForm;
  results$: Observable<Ads[]>;
  constructor(private formBild: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.formBild.group({
      query: ["", [Validators.required]]
    });
  }

  @Input() ads$: Observable<Ads[]>;

  get isAlowed() {
    return this.searchForm.invalid;
  }

  search() {
    console.log(this.searchForm.value.query);
    const query: string = this.searchForm.value.query.trim();
    if (query.length !== 0) {
      this.results$ = this.ads$;
      this.results$ = this.ads$.pipe(
        map(items => items.filter(item => item.title.includes(query)))
      );
    }
  }
}
