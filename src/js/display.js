export function display(arr , customerArr) {

    let data= ``;
    let cId;
    for (let i = 0; i < arr.length; i++) {
        
      cId=arr[i].customer_id;
      console.log(cId);
      data += `
       <tr class="customer">
            <td class="px-6 py-4 tr-id">
            ${arr[i].id}
            </td>
            <td class="px-6 py-4 cs-id">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  ${arr[i].customer_id}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap cs-name">
                <span class="text-sm text-gray-500">${customerArr[cId-1].name}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap date">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-sky-100 text-sky-800">
           ${arr[i].date}
                </span>
            </td>
            <td class="px-6 py-4 amount">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" data-amount="${arr[i].amount}">
                  ${arr[i].amount} $
                </span>
            </td>
                 </tr>
       `;
    }
    return data;
  }
export function displayCustomer(arr , customerArr) {

    let data= ``;

    for (let i = 0; i < arr.length; i++) {
        
     
      data += `
       <tr class="customer">
            <td class="px-6 py-4 tr-id">
            ${arr[i].id}
            </td>
            <td class="px-6 py-4 cs-id">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  ${arr[i].customer_id}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap cs-name">
                <span class="text-sm text-gray-500">${customerArr[0].name}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap date">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-sky-100 text-sky-800">
           ${arr[i].date}
                </span>
            </td>
            <td class="px-6 py-4 amount">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" data-amount="${arr[i].amount}">
                  ${arr[i].amount} $
                </span>
            </td>
                 </tr>
       `;
    }
    return data;
  }