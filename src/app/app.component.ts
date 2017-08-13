import {Component} from '@angular/core';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver';


type ArregloDeArreglos = Array<Array<any>>;


function s2ab(s: string): ArrayBuffer {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i !== s.length; ++i) {
    view[i] = s.charCodeAt(i) & 0xFF;
  }
  ;
  return buf;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datosExcel: ArregloDeArreglos = [];
  opcionesDeGuardado: XLSX.WritingOptions = {
    bookType: 'xlsx',
    type: 'binary'
  };

  nombreArchivo: string = "Proyecto.xlsx";


  eventoCuandoCambieArchivo(evento: any) {
    /* wire up file reader */
    const archivo: DataTransfer = <DataTransfer>(evento.target);
    if (archivo.files.length != 1) {
      throw new Error("No se puede subir mas de un archivo, lo siento.")
    }
    ;


    const lectorDeArchivos = new FileReader();
    lectorDeArchivos.onload = (eventoLectura: any) => {
      /* read workbook */
      const archivoFormatoBinario = eventoLectura.target.result;
      const hojaExcel = XLSX.read(archivoFormatoBinario, {type: 'binary'});

      /* grab first sheet */
      const nombrePrimeraHojaExcel = hojaExcel.SheetNames[0];
      const primeraHojaExcel = hojaExcel.Sheets[nombrePrimeraHojaExcel];

      /* save data */
      this.datosExcel = <ArregloDeArreglos> (XLSX.utils.sheet_to_json(primeraHojaExcel, {header: 1}));
    };
    lectorDeArchivos.readAsBinaryString(archivo.files[0]);
  }

  export(): void {
    /* generate worksheet */

    const hojaDeTrabajoNueva = XLSX.utils.aoa_to_sheet(this.datosExcel);

    let nuevoArreglo = Object.keys(hojaDeTrabajoNueva);


    let letras = [];

    nuevoArreglo.forEach(
      (valor)=> {


        const valorSoloLetras = valor.match(/[A-z]/g);

        const noEstaEnElArregloDeLetrasYNoEsref = letras.find(
          (valorArreglo)=> {
            const esIgualQueElArreglo = valorArreglo[0] == valorSoloLetras
            const noEsref = valorArreglo[0] == 'r';
            return ( esIgualQueElArreglo || noEsref )
          })

        if (!noEstaEnElArregloDeLetrasYNoEsref) {
          letras.push(valorSoloLetras[0]);
        } else {
          // return false;
        }
      }
    );
    letras.pop()

    let numeroMayor = 0;
    nuevoArreglo.forEach(
      (objeto: string)=> {
        let valor: any = objeto
        let letras = valor.match(/[A-z]+/g);
        let numero = Number(valor.replace(letras, ''));
        if (numero >= numeroMayor) {
          numeroMayor = numero;
        }
      }
    );
    console.log('NumeroMayor', numeroMayor)

    let columna = []


    for (let i = 0; i < letras.length; i++) {
      for (let j = 0; j < numeroMayor; j++) {
        let celda = hojaDeTrabajoNueva[letras[i] + (j + 1).toString()]
        if (celda.v != '*' && j!=0) {
          columna.push(celda.v);
        }
      }
    }

    let datosFinales = []
    console.log(this.datosExcel);
    columna.forEach(
      (valor,indice)=>{
        datosFinales[indice]=valor;
      }
    );


    const hojaDeTrabajoNuevaValoresUnaFila = XLSX.utils.aoa_to_sheet(datosFinales);

    /* generate workbook and add the worksheet */
    const excelNuevo = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(excelNuevo, hojaDeTrabajoNuevaValoresUnaFila, 'Datos en una Fila');

    /* save to file */
    const archivoExcelNuevoACrearse = XLSX.write(excelNuevo, this.opcionesDeGuardado);

    saveAs(new Blob([s2ab(archivoExcelNuevoACrearse)]), this.nombreArchivo);
  }

}
