export function countriesAlphaSort(countries) {
    if (countries.length === 0) return countries

    countries.sort((a, b) => a.name.common.localeCompare(b.name.common))

    return countries;

    // countries.sort(function(a, b){
    //     if(a.name.common < b.name.common) { return -1; }
    //     if(a.name.common > b.name.common) { return 1; }
    //     return countries;
    // })
}