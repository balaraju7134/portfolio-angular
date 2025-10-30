import { Component, inject, OnInit, OnDestroy } from "@angular/core"
import { HeaderComponent } from "./header/header.component"
import { ServicesComponent } from "./components/services/services.component"
import { HomeComponent } from "./components/home/home.component"
import { ProjectsComponent } from "./components/projects/projects.component"
import { ContactComponent } from "./components/contact/contact.component"
import { ApiHandlingService } from "../interceptors/api-handling.service"
import { Constants } from "../interceptors/constants.service"
import { ActivatedRoute } from "@angular/router"
import { Subject } from "rxjs"
import { map, filter, distinctUntilChanged, switchMap, takeUntil, tap } from "rxjs/operators"

@Component({
 selector: "app-layout",
 standalone: true,
 imports: [HeaderComponent, ServicesComponent, HomeComponent, ProjectsComponent, ContactComponent],
 templateUrl: "./layout.component.html",
})
export class LayoutComponent implements OnInit, OnDestroy {
 private readonly apiService = inject(ApiHandlingService)
 private readonly route = inject(ActivatedRoute)
 private readonly destroy$ = new Subject<void>()

 portfolioName = ""
 isLoading = true
 portfolioFound = false

 portfolioData: any = {}
 userInfo: any = {}
 servicesList: any[] = []
 projectsList: any[] = []
 contactInfo: any = {}

 ngOnInit(): void {
  this.route.paramMap
   .pipe(
    map(params => params.get("portfolio_name") ?? ""),
    distinctUntilChanged(),
    tap(name => {
     this.portfolioName = name
     this.isLoading = !!name
     this.portfolioFound = false
    }),
    filter(name => !!name),
    switchMap(name => this.apiService.post(Constants.GET_PORTFOLIO_URL, { portfolio_name: name })),
    takeUntil(this.destroy$)
   )
   .subscribe({
    next: (res: any) => {
     if (res?.status && Array.isArray(res.data) && res.data.length > 0) {
      this.portfolioData = res.data[0]
      this.portfolioFound = true
      this.setupData()
     } else {
      this.portfolioFound = false
      this.isLoading = false
     }
    }, error: err => {
     console.error("Error fetching portfolio:", err)
     this.portfolioFound = false
     this.isLoading = false
    },
   })
 }

 ngOnDestroy(): void {
  this.destroy$.next()
  this.destroy$.complete()
 }

 private setupData(): void {
  this.userInfo = this.portfolioData.user_info ?? {}
  this.servicesList = this.portfolioData.services ?? []
  this.projectsList = this.portfolioData.projects ?? []
  this.contactInfo = this.portfolioData.contact_info ?? {}
  this.isLoading = false
 }
}