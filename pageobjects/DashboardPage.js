class DashboardPage
{
constructor(page)
{
    this.page=page
    this.DashboardPage = page.locator("//a[contains(text(), 'Dashboard') and @title='Dashboard']")
    this.searchBox = page.locator("(//input[@name='grid_search_input'])[1]")

}
async goToDashboard()
{
    await this.DashboardPage.first().click();
    
}

}
module.exports = {DashboardPage};