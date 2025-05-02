import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <!-- Header with logo -->
      <header class="header">
        <div class="logo">
          <img src="assets/sowparnika-logo.png" alt="Sowparnika Logo" />
          <p class="tagline">Delivering Happiness</p>
        </div>
        
        <!-- Navigation -->
        <nav class="navigation">
          <ul>
            <li><a href="#">OUR HOMES</a></li>
            <li><a href="#">OUR STORY</a></li>
            <li><a href="#">CONNECT WITH US</a></li>
          </ul>
        </nav>
      </header>
      
      <hr class="divider" />

      <!-- Main content with bird image and legacy text -->
      <main class="main-content">
        <div class="legacy-content">
          <div class="legacy-text">
            <h1>
              <span class="beyond">Bey<span class="heart-icon">❤</span>nd</span>
              <span class="legacy">l e g a c y</span>
            </h1>
          </div>
          <div class="bird-image">
            <img src="assets/origami-bird.png" alt="Origami Bird" />
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
      background-color: #f5f0e8;
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
    }
    
    .logo {
      text-align: center;
    }
    
    .tagline {
      margin-top: 5px;
      font-size: 12px;
    }
    
    .navigation ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .navigation li {
      margin: 0 15px;
    }
    
    .navigation a {
      text-decoration: none;
      color: #8a7a6d;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 1px;
    }
    
    .divider {
      border: none;
      height: 1px;
      background-color: #d3c5b8;
      margin: 10px 0;
    }
    
    .main-content {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 500px;
    }
    
    .legacy-content {
      display: flex;
      align-items: center;
      position: relative;
    }
    
    .legacy-text {
      position: absolute;
      left: 0;
      z-index: 1;
    }
    
    .bird-image {
      margin-left: 100px;
    }
    
    .beyond {
      display: block;
      color: #333;
      font-weight: bold;
      font-size: 36px;
    }
    
    .heart-icon {
      color: #f5922f;
    }
    
    .legacy {
      display: block;
      color: #a69585;
      letter-spacing: 20px;
      font-size: 64px;
      font-weight: 300;
      margin-top: 10px;
    }
  `],
  imports: [FormsModule],
})
export class SowparnikaComponent {
  name = '';
}

bootstrapApplication(SowparnikaComponent);
