
import { CrewTimeTableComponent } from './crew-time-table/crew-time-table.component';
import { CrewComponent } from './crew/crew.component';
import { CrewDesignationsComponent } from './crew-designations/crew-designations.component';



export class AppModuleModule { 

  private readonly newProperty_1 = this;

  private readonly newProperty = this;

  private newMethod_1() {
    return this;
  }

private newMethod() {
  return [
    CrewTimeTableComponent,
    async function (): Promise<any> {
      CrewComponent;
    },
    CrewDesignationsComponent
  ];
}
}
