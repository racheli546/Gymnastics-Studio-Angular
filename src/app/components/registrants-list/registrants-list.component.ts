import { AfterViewInit, Component } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import type { RowClassParams } from 'ag-grid-community';

interface IRow {
  firstName: string;
  lastName: string;
  phone: string;
  idNumber: string;
  lessonName: string;
  price: number;
  paid: boolean;
  details?: any;
}

@Component({
  selector: 'app-registrants-list',
  imports: [AgGridAngular],
  templateUrl: './registrants-list.component.html',
  styleUrl: './registrants-list.component.css'
})
export class RegistrantsListComponent implements AfterViewInit {

  rowData: IRow[] = [
    { firstName: "Omer", lastName: "Ben David", phone: "050-1234561", idNumber: "111111111", lessonName: "Beast Mode Bootcamp", price: 390, paid: true },
    { firstName: "Dana", lastName: "Shani", phone: "050-1234562", idNumber: "222222222", lessonName: "Core Crushers", price: 420, paid: false },
    { firstName: "Gal", lastName: "Mor", phone: "050-1234563", idNumber: "333333333", lessonName: "Flex & Flow", price: 310, paid: true },
    { firstName: "Eden", lastName: "Amar", phone: "050-1234564", idNumber: "444444444", lessonName: "Warrior Strength", price: 450, paid: true },
    { firstName: "Roni", lastName: "Barak", phone: "050-1234565", idNumber: "555555555", lessonName: "JumpFit Extreme", price: 280, paid: false },
    { firstName: "Lior", lastName: "Geva", phone: "050-1234566", idNumber: "666666666", lessonName: "Zen Power Flow", price: 370, paid: true },
    { firstName: "Talia", lastName: "Goren", phone: "050-1234567", idNumber: "777777777", lessonName: "Back to Basics", price: 290, paid: true },
    { firstName: "Niv", lastName: "Peleg", phone: "050-1234568", idNumber: "888888888", lessonName: "Energy Circuit", price: 350, paid: true },
    { firstName: "Rotem", lastName: "Salem", phone: "050-1234569", idNumber: "999999999", lessonName: "Glutes & Gains", price: 300, paid: false },
    { firstName: "Adi", lastName: "Sasson", phone: "050-1234570", idNumber: "121212121", lessonName: "Morning Mobility", price: 320, paid: true },
    { firstName: "Yasmin", lastName: "Bar-On", phone: "050-1234571", idNumber: "232323232", lessonName: "Tabata Fury", price: 390, paid: false },
    { firstName: "Tom", lastName: "Shahar", phone: "050-1234572", idNumber: "343434343", lessonName: "Balance & Burn", price: 250, paid: true }
  ];

  colDefs: ColDef<IRow>[] = [
    { field: "firstName", filter: 'agTextColumnFilter', floatingFilter: true },
    { field: "lastName", filter: 'agTextColumnFilter', floatingFilter: true },
    { field: "phone", filter: 'agTextColumnFilter', floatingFilter: true },
    { field: "idNumber", filter: 'agTextColumnFilter', floatingFilter: true },
    { field: "lessonName", filter: 'agTextColumnFilter', floatingFilter: true },
    { field: "price", filter: 'agNumberColumnFilter', floatingFilter: true },
    { field: "paid", filter: 'agBooleanColumnFilter' },
    {
      field: "details",
      headerName: "details",
      cellRenderer: () => {
        return '<button class="details-btn">פרטים</button>';
      },
      filter: false
    }
  ];
  defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    cellStyle: (params: { data?: { paid?: boolean } }) => {
      if (params.data && !params.data.paid) {
        return { backgroundColor: '#e48c8c' };
      }
      return null;
    },
  };

    rowSelection = {
      mode: 'singleRow',
    };
    ngAfterViewInit(): void {
      // האזנה כללית לכל הלחיצות בטבלה
      document.addEventListener('click', (event: any) => {
        if (event.target && event.target.classList.contains('details-btn')) {
          const rowElement = event.target.closest('.ag-row');
          if (rowElement) {
            const rowIndex = rowElement.getAttribute('row-index');
            const rowData = this.rowData[parseInt(rowIndex, 10)];
            this.showDetails(rowData);
          }
        }
      });
    }


  showDetails(row: IRow): void {
      alert(
        ` פרטי המשתתף:\n
    שם: ${row.firstName} ${row.lastName}\n
    טלפון: ${row.phone}\n
    ת.ז: ${row.idNumber}\n
    שיעור: ${row.lessonName}\n
    מחיר: ${row.price} ש"ח\n
    שולם: ${row.paid ? 'כן' : 'לא'}`
      );
    }

  // rowClassRules = {
  //     'unpaid-row': (params: RowClassParams<IRow>) => !!params.data && !params.data.paid
  //   };


  }
