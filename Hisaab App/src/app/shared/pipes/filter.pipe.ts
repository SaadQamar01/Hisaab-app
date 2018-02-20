import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            if(it.name){
                return it.name.toLowerCase().includes(searchText);
            }else if(it.people_name){
                return it.people_name.toLowerCase().includes(searchText);
            }else if(it.project_name){
                return it.project_name.toLowerCase().includes(searchText);
            }else if(it.account_name){
                return it.account_name.toLowerCase().includes(searchText);
            }
        });
    }
}
