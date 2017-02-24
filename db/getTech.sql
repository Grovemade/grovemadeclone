select * 
from products
	join tech_specs on tech_specs.id = products.id
  join dimensions on tech_specs.id = dimensions.product_id
where products.name = $1;