abstract class Template {
  readonly templateMetod = ():void => {
    this.step1()
    this.step2()
    this.step3()
    this.step4()
  }

  abstract step1 ():void

  abstract step2 ():void 

  private step3 () {
    console.log('Formatando Dados')
  }

  private step4 () {
    console.log('Exibindo Dados')
  }
}

class PDF extends Template {
  step1(): void {
    console.log('Parseando Documento PDF')
  }

  step2(): void {
    console.log('Extraindo Dados do PDF')
  }
}

class Excel extends Template {
  step1(): void {
    console.log('Parseando Documento Excel')
  }

  step2(): void {
    console.log('Extraindo Dados do Excel')
  }
}


export const main = () => {
  const pdf = new PDF()
  pdf.templateMetod()
  const excel = new Excel()
  excel.templateMetod()
}

main()