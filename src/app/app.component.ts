import { Component, inject } from "@angular/core"
import { LayoutComponent } from "./layout/layout.component"
import { ApiHandlingService } from "./interceptors/api-handling.service"
import { Constants } from "./interceptors/constants.service"

@Component({
 selector: "app-root",
 imports: [LayoutComponent],
 templateUrl: "./app.component.html",
})
export class AppComponent {
 private readonly apiService = inject(ApiHandlingService)

 title = "portfolio"
 portfolioData: any = {}
 isLoading = true

 ngOnInit(): void {
  const query = location.search.replace(/^\?/, "").replace(/\/$/, "")
  if (query) this.getPortfolio(query)
  else this.isLoading = false
 }

 getPortfolio(name: string) {
  const params = { portfolio_name: name }
  this.apiService.post(Constants.GET_PORTFOLIO_URL, params).subscribe({
   next: (res: any) => {
    if (res["status"]) {
     this.portfolioData = res.data?.[0] ?? {}
    }
   }, error: (err) => {
    console.error("Error fetching portfolio:", err)
   }, complete: () => this.isLoading = false
  })
 }
}