import { Component, OnInit } from '@angular/core';
import { footerData } from '@src/app/core/data/footer-data';
import { Footer } from '@src/app/core/models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  data: Footer = footerData;
  config: any;
  options = { multi: false };

  ngOnInit(): void {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: any) {
    const config = {
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
    if (!this.config.multi) {
      this.data.footerList.filter(
        (menu, i) => i !== index && menu.active
      ).forEach(menu => menu.active = !menu.active);
    }

    this.data.footerList[index].active = !this.data.footerList[index].active;
  }

}
