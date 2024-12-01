import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultAvatar'
})
export class DefaultAvatarPipe implements PipeTransform {

  transform(avatarUrl: string | null | undefined, defaultUrl: string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'): string {
    return avatarUrl?.trim() ? avatarUrl : defaultUrl;
  }

}
