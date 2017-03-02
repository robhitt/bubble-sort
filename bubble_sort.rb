def bubble_sort(arr)
  k = 0

  while k < (arr.length - 1)
    i = 0
    j = i + 1
    (arr.length - 1).times do
      # puts "i:#{i}, j:#{j}, k:#{k} "
      if arr[i] > arr[j]
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      end
      i += 1
      j += 1
    end
    k += 1
  end
  return arr
end

# def swap(arr[i], arr[j])
#   temp = arr[i]
#   arr[i] = arr[j]
#   arr[j] = temp
# end
print bubble_sort([33,14,27,35,10, 4, 5, 1])
puts ""
print bubble_sort([33,14])
puts ""
print bubble_sort([33])
