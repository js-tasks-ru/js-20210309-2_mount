export default class ColumnChart {
  constructor({
    data = [],
    label = '',
    link = '',
    value = 0,
  } = {}) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;
    this.classCollect = {};   
    this.render();
  }
  chartHeight = 50;
  emptyData(){
    if (!this.data.length){ return 'column-chart_loading '}; 
  }
  render() {
    const element = document.createElement('div'); // (*)
    element.innerHTML = `
    <div class="column-chart ${this.emptyData()}" style="--chart-height: 50">
      <div class="column-chart__title">
        Total ${this.label}
        <a href="${this.link}" class="column-chart__link">View all</a>
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.value}</div>
        <div data-element="body" class="column-chart__chart">
        </div>
      </div>
    </div>
    `;
    this.classCollectElems(element.querySelectorAll('div'))
    // NOTE: в этой строке мы избавляемся от обертки-пустышки в виде `div`
    // который мы создали на строке (*)
    this.element = element.firstElementChild;
  }
  classCollectElems(element){
    for (const [key, value] of Object.entries(element)) {
      if (value.hasAttribute("data-element")) {
        this.classCollect[value.dataset.element] = value;
      }
    }
    this.drawColumns(this.data,this.classCollect)
  }
  drawColumns(data,parentElem){
    const columsList = [];
    for (const [key, value] of Object.entries(data)) {
      const currentHeight = Math.floor(this.chartHeight/100 * value);
      const percent = (100 * currentHeight / this.chartHeight).toFixed(0);
      columsList.push(`<div style="--value: ${String(currentHeight)}" data-tooltip="${percent}%"></div>`)
      parentElem.body.innerHTML = columsList.join('');
    }
  };
  update(newData){
    this.drawColumns(newData,this.classCollect)
  }
  remove () {
    this.element.remove();
  }
  destroy() {
    this.remove();
    // NOTE: удаляем обработчики событий, если они есть
  }
}