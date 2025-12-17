import { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockOrders } from '@/data/mockData';
import { Order, OrderStatus } from '@/types/admin';
import { Eye, Package } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const statusColors: Record<OrderStatus, string> = {
  new: 'bg-blue-500 text-white',
  processing: 'bg-yellow-500 text-white',
  shipped: 'bg-purple-500 text-white',
  delivered: 'bg-green-500 text-white',
  cancelled: 'bg-red-500 text-white',
};

const statusLabels: Record<OrderStatus, string> = {
  new: 'Nouă',
  processing: 'În procesare',
  shipped: 'Expediată',
  delivered: 'Livrată',
  cancelled: 'Anulată',
};

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const filteredOrders = orders.filter(order =>
    statusFilter === 'all' || order.status === statusFilter
  );

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId
        ? { ...order, status: newStatus, updatedAt: new Date().toISOString() }
        : order
    ));
    toast({ title: `Status comandă actualizat: ${statusLabels[newStatus]}` });
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setIsDialogOpen(true);
  };

  const getStatusCounts = () => {
    return {
      all: orders.length,
      new: orders.filter(o => o.status === 'new').length,
      processing: orders.filter(o => o.status === 'processing').length,
      shipped: orders.filter(o => o.status === 'shipped').length,
      delivered: orders.filter(o => o.status === 'delivered').length,
      cancelled: orders.filter(o => o.status === 'cancelled').length,
    };
  };

  const counts = getStatusCounts();

  return (
    <AdminLayout title="Gestiune Comenzi">
      <div className="space-y-6">
        {/* Status Filter Tabs */}
        <div className="flex gap-2 flex-wrap">
          {[
            { value: 'all', label: 'Toate', count: counts.all },
            { value: 'new', label: 'Noi', count: counts.new },
            { value: 'processing', label: 'În procesare', count: counts.processing },
            { value: 'shipped', label: 'Expediate', count: counts.shipped },
            { value: 'delivered', label: 'Livrate', count: counts.delivered },
            { value: 'cancelled', label: 'Anulate', count: counts.cancelled },
          ].map(tab => (
            <Button
              key={tab.value}
              variant={statusFilter === tab.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setStatusFilter(tab.value)}
              className="gap-2"
            >
              {tab.label}
              <Badge variant="secondary" className="text-xs">
                {tab.count}
              </Badge>
            </Button>
          ))}
        </div>

        <Card className="border border-border">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID Comandă</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Produse</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Acțiuni</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map(order => (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono text-sm">
                      #{order.id.split('-')[1]}
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{order.customerName}</p>
                        <p className="text-xs text-muted-foreground">{order.customerEmail}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {new Date(order.createdAt).toLocaleDateString('ro-RO', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{order.items.length} produs(e)</span>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {order.total} MDL
                    </TableCell>
                    <TableCell>
                      <Select
                        value={order.status}
                        onValueChange={(value: OrderStatus) => handleStatusChange(order.id, value)}
                      >
                        <SelectTrigger className="w-36">
                          <Badge className={`${statusColors[order.status]} text-xs`}>
                            {statusLabels[order.status]}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(statusLabels).map(([value, label]) => (
                            <SelectItem key={value} value={value}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleViewOrder(order)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Order Details Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Comandă #{selectedOrder?.id.split('-')[1]}
              </DialogTitle>
            </DialogHeader>
            {selectedOrder && (
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Client</p>
                    <p className="font-medium">{selectedOrder.customerName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <Badge className={`${statusColors[selectedOrder.status]}`}>
                      {statusLabels[selectedOrder.status]}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm">{selectedOrder.customerEmail}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Telefon</p>
                    <p className="text-sm">{selectedOrder.customerPhone}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-muted-foreground">Adresă Livrare</p>
                    <p className="text-sm">{selectedOrder.address}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-xs text-muted-foreground mb-2">Produse Comandate</p>
                  <div className="space-y-2">
                    {selectedOrder.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-2 border border-border">
                        <div>
                          <p className="font-medium text-sm">{item.productName}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.quantity} x {item.price} MDL
                          </p>
                        </div>
                        <span className="font-medium">
                          {item.quantity * item.price} MDL
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Comandă</span>
                  <span className="text-xl font-bold">{selectedOrder.total} MDL</span>
                </div>

                <div className="text-xs text-muted-foreground">
                  <p>Creat: {new Date(selectedOrder.createdAt).toLocaleString('ro-RO')}</p>
                  <p>Actualizat: {new Date(selectedOrder.updatedAt).toLocaleString('ro-RO')}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}
