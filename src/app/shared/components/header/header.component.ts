import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeSection = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  /**
   * Lifecycle hook that is called after Angular has fully initialized the component's view.
   * 
   * In this implementation, if the code is running in a browser environment, it selects all
   * `<div>` elements with an `id` attribute and attaches an IntersectionObserver (returned by
   * `checkActiveSection()`) to each of them. This is typically used to monitor which section
   * of the page is currently active or visible in the viewport.
   */
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const div = document.querySelectorAll('div[id]');
      const observer = this.checkActiveSection();
      div.forEach((div) => observer.observe(div));
    }
  }

  /**
   * Creates and returns a new `IntersectionObserver` instance that monitors the visibility
   * of elements and updates the `activeSection` property with the `id` of the currently
   * intersecting element. The observer triggers when at least 80% of the element is visible
   * in the viewport.
   *
   * @returns {IntersectionObserver} An `IntersectionObserver` configured to update `activeSection`
   *                                based on the intersection state of observed elements.
   */
  checkActiveSection(): IntersectionObserver {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            this.activeSection = id;
          }
        });
      },
      {
        threshold: 0.8,
      }
    );
  }
}
