/**
 * @version: where high is inclusive upper bound
**/
export default function bs_list(haystack: number[], needle: number): boolean {

  let low: number = 0;
  let high: number = haystack.length - 1;
  let mid: number;
  let midValue: number;
  do {
    mid = Math.floor((high - low) / 2) + low;
    midValue = haystack[mid];
    if (midValue === needle) {
      return true;
    }
    else if (midValue < needle) {
      //mid value is smaller than target
      low = mid + 1;
    }
    else if (midValue > needle) {
      //midValue is higher than target
      //no need to include mid since we ALREADY know that it is bigger
      high = mid - 1;
    }
  } while (low <= high);

  return false;
}
//

/**
 * @version: where high is exclusive upper bound
**/
// export default function bs_list(haystack: number[], needle: number): boolean { let low: number = 0;
//   let high: number = haystack.length;
//   let mid: number;
//   let midValue: number;
//
//   do {
//     mid = Math.floor((high - low) / 2) + low;
//     midValue = haystack[mid];
//     if (midValue === needle) {
//       return true;
//     }
//     else if (midValue < needle) {
//       //mid value is smaller than target
//       low = mid + 1;
//     }
//     else if (midValue > needle) {
//       //midValue is higher than target
//       high = mid;
//     }
//   } while (low < high);
//
//   return false;
// }


// /**
//  * @version: Primeagen
//  */
// export default function bs_list(haystack: number[], needle: number): boolean {
//
//   let lo = 0;
//   let hi = haystack.length;
//
//   do {
//     const m = Math.floor(lo + (hi - lo) / 2);
//     const v = haystack[m];
//
//     if (v == needle) {
//       return true;
//     } else if (v > needle) {
//       hi = m;
//     } else {
//       lo = m + 1;
//     }
//   } while (lo < hi);
//
//   return false;
// }
