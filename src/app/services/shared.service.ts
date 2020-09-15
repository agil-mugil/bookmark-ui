import { Injectable } from '@angular/core';
import { UrlTree, UrlSegmentGroup,UrlSegment, PRIMARY_OUTLET, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  url = '';
  tree: UrlTree;
  primary: UrlSegmentGroup;
  constructor(private router: Router) { }

getShortUrl(url:string):string {
    this.url = url.replace('https://','').
					replace('http://','').
					replace('#','/').
					replace('www.','').
					replace('.com','').
					trim();
	
	if(this.url.length == this.url.lastIndexOf('/')+1) {
		this.url = this.url.substring(0,this.url.length-1);
	}
	
	console.log(this.url);
    this.tree = this.router.parseUrl(this.url);
    this.primary = this.tree.root.children[PRIMARY_OUTLET];
    const primarySegments: UrlSegment[] = this.primary.segments;
 	console.log(primarySegments);
	console.log(primarySegments[primarySegments.length-1].path);
	return primarySegments[primarySegments.length-1].path;
  }
}
